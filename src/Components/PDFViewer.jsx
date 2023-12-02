// PDFViewer.js
import React, { useState } from "react"
import { Document, Page } from "react-pdf"
import Modal from "react-modal"

Modal.setAppElement("#root") // Set the root element for accessibility

const PDFViewer = ({ pdfPath }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open PDF</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Viewer"
      >
        <button onClick={closeModal}>Close</button>
        <Document file={pdfPath}>
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </div>
  )
}

export default PDFViewer
