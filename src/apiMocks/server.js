import { rest } from 'msw'
import { setupServer } from 'msw/node'

const url = process.env.REACT_APP_SUPABASE_URL + '/rest/v1'

let postedClient = {}

export const server = setupServer(
  rest.get(url + '/clients', (req, res, ctx) => {
    const select = req.url.searchParams.get('select')
    const id = req.url.searchParams.get('id')
    if(select === '*' && !id) {
      // response for getClients()
      return res(
        ctx.json([
          {
            id: 1,
            client_name: 'bob1',
            business_name: 'business1'
          },
          {
            id: 2,
            client_name: 'bob2',
            business_name: 'business2'
          },
          {
            id: 3,
            client_name: 'bob3',
            business_name: 'business3'
          }
        ])
      )
    } else if(id) {
      // response for getClient(id)
      if(id === 'eq.42') {
        // Janky workaround to make testing edit/create possible.
        // The post route mock will set the id to 42
        // So this responds with the posted data when client.id is 42
        return res(
          ctx.json(
            postedClient
          )
        )
      } else {
        return res(
          ctx.json(
            {
              id: 1,
              client_name: 'bob1',
              business_name: 'business1'
            }
          )
        )
      }
    }
  }),
  rest.post(url + '/clients', (req, res, ctx) => {
    let [client] = req.body
    client = { ...client, id: 42 }
    postedClient = client
    return res(
      ctx.json([
        client
      ])
    )
  }),
  rest.get(url + '/projects', (req, res, ctx) => {
    const select = req.url.searchParams.get('select')
    const id = req.url.searchParams.get('id')
    if(select === '*' && !id) {
      // response for getProjects()
      return res(
        ctx.json([
          {
            id: 1,
            title: 'project1',
            client_id: '1',
            clients: {
              client_name: 'bob1'
            }
          },
          {
            id: 2,
            title: 'project2',
            client_id: '2',
            clients: {
              client_name: 'bob2'
            }
          },
          {
            id: 3,
            title: 'project3',
            client_id: '3',
            clients: {
              client_name: 'bob3'
            }
          }
        ])
      )
    } else if(id) {
      // response for getProjectById(id)
      return res(
        ctx.json([
          {
            id: 1,
            title: 'project1',
            client_id: '1',
            clients: {
              client_name: 'bob1'
            }
          }
        ])
      )
    }
  })
)
