/*globals cy*/

import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

export default class BaseModal {
    constructor(modalContainer = '') {
        this.modalContainer = modalContainer
        this.header = new ModalHeader(`${modalContainer} .modal-header`)
        this.body = new ModalBody(`${modalContainer} .modal-body`)
        this.footer = new ModalFooter(`${modalContainer} .modal-footer`)
    }
}