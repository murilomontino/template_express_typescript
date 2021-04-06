"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, )

const port = 3000

app.use(_cors2.default.call(void 0, ))
app.use(_express2.default.urlencoded({ extended: false }))
app.use(_express2.default.json())

app.post('/', async (req, rep) => {
   
})

console.log(port)

app.listen(port, () => {
    console.log('====================================')
    console.log('===========SERVIDOR ATIVO===========')
    console.log('====================================')
})

