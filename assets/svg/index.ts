const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('./', false, /\.svg$/)
requireAll(req)
console.log('req', req)
export default req
