import './index.css'

const DenomItem = props => {
  const {denomDetails, updateBalance} = props
  const {value} = denomDetails

  const onClickUpdateBal = () => {
    updateBalance(value)
  }

  return (
    <li className="denom-item">
      <button type="button" className="denom-button" onClick={onClickUpdateBal}>
        {value}
      </button>
    </li>
  )
}

export default DenomItem
