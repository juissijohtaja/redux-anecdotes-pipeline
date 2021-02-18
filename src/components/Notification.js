import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: 'green',
    color: 'white'
  }

  const notificationDisplay = props.notification

  return (
    <div>
      {notificationDisplay === null ? null : <div style={style}>{ notificationDisplay }</div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification