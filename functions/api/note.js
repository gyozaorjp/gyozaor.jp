export const onRequest = async ({request, env, params}) => {
  const url = env.API_NOTE
  console.log('params', params)

  try {
    const res = await fetch(url)
    const text = await res.text()
    const response = new Response(text)
    response.headers.set('Content-Type', 'application/json;charset=utf-8')
    response.headers.append('Access-Control-Allow-Origin', '*')
    return response
  } catch (err) {
    console.error('ERROR', err)
    throw new Error(`Error: ${err}`)
  }
}