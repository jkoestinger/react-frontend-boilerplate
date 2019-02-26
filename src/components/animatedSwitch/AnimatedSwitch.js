import React from 'react'
import { Transition } from 'react-spring/renderprops'
import { Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const AnimatedSwitch = ({ children, location, enter, leave }) => {
  return (
    <div style={{ position: 'relative', top: 0 }}>
      <Transition
        native
        items={location}
        keys={location.pathname.split('/')[1]}
        from={leave}
        enter={enter}
        leave={leave}
      >
        {(loc) => style => (
            <Switch location={loc}>
              {children(style)}
            </Switch>
        )}
      </Transition>
    </div>
  )
}

AnimatedSwitch.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  enter: PropTypes.object,
  leave: PropTypes.object
}

AnimatedSwitch.defaultProps = {
  enter: {
    transform: 'translateY(0)',
    opacity: 1
  },
  leave: {
    transform: 'translateY(50px)',
    opacity: 0
  },
}

export default withRouter(AnimatedSwitch)
