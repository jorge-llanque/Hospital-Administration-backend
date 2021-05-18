import * as Controller from './controllers';

export default (server: any) => {
    server.use('/api/hospital', Controller.hospitalCtrl)
    server.use('/api/doctor', Controller.doctorCtrl)
    server.use('/api/patient', Controller.patientCtrl)
    server.use('/api/patient/history', Controller.historyCtrl)
}