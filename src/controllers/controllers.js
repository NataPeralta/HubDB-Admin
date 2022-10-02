const hubspot = require('@hubspot/api-client')
const mySecret = process.env['key']
const hs = new hubspot.Client({ accessToken: mySecret })

const controllers = {
    getTables: async () => {
        try {
            const apiResponse = await hs.cms.hubdb.tablesApi.getAllTables();
            return apiResponse
        } catch (e) {
            console.error(e)
        }
      res.render('index', { data : apiResponse });
    },

    getTable: async (req, res) => {
      const id = req.params.id;  
      try {
            const apiResponse = await hs.cms.hubdb.tablesApi.getTableDetails(id)
            return apiResponse;
        } catch (e) {
            console.error(e)
        }
        res.render('tablaId', { data: apiResponse });
    }
}

module.exports = controllers;