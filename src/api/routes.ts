import * as Controller from './controllers';

export default (server: any) => {
    server.use('/api', Controller.hospitalCtrl)
    server.use('/doctor', Controller.doctorCtrl)
}