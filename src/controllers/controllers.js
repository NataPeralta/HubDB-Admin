const hubspot = require('@hubspot/api-client')
const hs = new hubspot.Client({
    accessToken: "pat-na1-5561bebe-17ca-4423-b403-302be2947921"
})

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