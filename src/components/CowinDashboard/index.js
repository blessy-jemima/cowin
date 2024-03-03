import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByCoverage from '../VaccinationCoverage'

import './index.css'

class CowinDashboard extends Component {
  state = {isLoading: true, covidDetails: [], isSuccess: false}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()

    if (response.ok === true) {
      this.setState({isSuccess: true})
    }

    const newData = {
      last7DaysVaccination: data.last_7_days_vaccination.map(each => ({
        vaccinationDate: each.vaccination_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      })),
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }

    this.setState({isLoading: false, covidDetails: newData})
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-para">Something went wrong</p>
    </div>
  )

  renderSuccessView = () => {
    const {covidDetails} = this.state

    return (
      <>
        {covidDetails.map(each => (
          <>
            <VaccinationByCoverage
              key="coverage"
              details={each.last7DaysVaccination}
            />
            <VaccinationByGender
              key="gender"
              details={each.vaccinationByGender}
            />
            <VaccinationByAge key="age" details={each.vaccinationByAge} />
          </>
        ))}
      </>
    )
  }

  render() {
    const {isLoading, isSuccess} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="logo"
        />
        <p className="logo-para">CoWIN Vaccination in India</p>
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="ThreeDots" color="#ffffff" height={50} width={80} />
          </div>
        ) : (
          ''
        )}
        {isSuccess ? this.renderSuccessView() : this.renderFailureView()}
      </div>
    )
  }
}

export default CowinDashboard
