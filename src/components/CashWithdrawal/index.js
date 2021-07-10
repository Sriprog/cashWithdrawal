import {Component} from 'react'

import DenomItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  getFirstChar = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstChar(name)
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-con">
              <p className="initial">{initial}</p>
            </div>
            <p className="customer-name">{name}</p>
          </div>
          <div className="balance-con">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {count}
              <br />
              <span className="InRupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenomItem
                key={eachDenomination.id}
                denomDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
