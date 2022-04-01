import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

class Certifications extends Component {
  state = {
    certificationsList: [],
    certificationInput: '',
    issuerInput: '',
    uploadInput: '',
  }

  onChangeCertificationInput = event => {
    this.setState({certificationInput: event.target.value})
  }

  onChangeIssuerInput = event => {
    this.setState({issuerInput: event.target.value})
  }

  onChangeUploadInput = event => {
    this.setState({uploadInput: event.target.value})
  }

  onAddCertifications = event => {
    event.preventDefault()
    const {certificationInput, issuerInput, uploadInput} = this.state
    const newCertifications = {
      id: v4(),
      certification: certificationInput,
      issuer: issuerInput,
      upload: uploadInput,
    }
    this.setState(prevState => ({
      certificationsList: [...prevState.certificationsList, newCertifications],
      certificationInput: '',
      issuerInput: '',
      uploadInput: '',
    }))
  }

  render() {
    const {certificationInput, issuerInput, uploadInput} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Skills-Based Certifications</h1>
        <p className="description">(You can add upto 5 certifications)</p>
        <div className="certifications-container">
          <form className="form" onSubmit={this.onCertifications}>
            <label htmlFor="certification name" className="label">
              Certification name
            </label>
            <input
              type="text"
              id="certification name"
              value={certificationInput}
              onChange={this.onChangeCertificationInput}
              className="input"
              placeholder="Enter certification name"
            />
            <label htmlFor="issuer" className="label">
              Issuer
            </label>
            <input
              type="text"
              id="issuer"
              value={issuerInput}
              onChange={this.onChangeIssuerInput}
              className="input"
              placeholder="Enter issuer"
            />
            <div>
              <input
                type="text"
                id="upload"
                value={uploadInput}
                onChange={this.onChangeUploadInput}
                className="input"
                placeholder="Upload a file showing you are certification"
              />
              <p className="description">
                (File format should be only pdf and jpg)
              </p>
            </div>
            <div className="container">
              <button
                className="save-button"
                type="submit"
                onClick={this.onSaveButton}
              >
                SAVE CERTIFICATION
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Certifications
