import * as Controller from './controllers';

export default (server: any) => {
    server.use('/api/hospital', Controller.hospitalCtrl)
    server.use('/api/doctor', Controller.doctorCtrl)
}