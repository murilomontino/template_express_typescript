import cors from 'cors'
import express, { Request, Response } from 'express'

const app = express()

const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/', async (req: Request, rep: Response) => {
   
})

console.log(port)

app.listen(port, () => {
    console.log('====================================')
    console.log('===========SERVIDOR ATIVO===========')
    console.log('====================================')
})

