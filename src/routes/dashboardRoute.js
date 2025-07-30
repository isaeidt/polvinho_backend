// import { Router } from 'express'
// import path from 'path'
// import {fileURLToPath} from 'url'
// import { verifyToken, verifyRole } from '../authenticator/authJWT.js'

// const dashboardRouter = Router();

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// dashboardRouter.get('/dashboard-aluno', verifyToken, verifyRole(['Aluno']), (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'dashboardAluno.html'))
// })

// dashboardRouter.get('/dashboard-professor', verifyToken, verifyRole(['Professor']), (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'dashboardProfessor.html'))
// })

// dashboardRouter.get('/dashboard-admin', verifyToken, verifyRole(['Admin']), (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'dashboardAdmin.html'))
// })

// export default dashboardRouter
