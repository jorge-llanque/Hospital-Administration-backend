import * as Controller from './controllers';

export default (server: any) => {
    server.use('/api/hospital', Controller.hospitalCtrl)
    server.use('/api/doctor', Controller.doctorCtrl)
    server.use('/api/patient', Controller.patientCtrl)
    server.use('/api/history', Controller.historyCtrl)
    server.use('/api/specialty', Controller.specialtyCtrl)
    server.use('/api/appointment', Controller.appointmentCtrl)
}