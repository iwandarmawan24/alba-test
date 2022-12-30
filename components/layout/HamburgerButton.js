import React from 'react';
import { func } from 'prop-types'

const HamburgerButton = ({onClick}) => (
    <div className="max-md:block md:hidden space-y-2 w-[50px]" onClick={onClick}>
        <div className="w-8 h-[3px] bg-yellow-400"></div>
        <div className="w-8 h-[3px] bg-yellow-400"></div>
        <div className="w-8 h-[3px] bg-yellow-400"></div>
    </div>
)
HamburgerButton.propTypes = {
    onClick: func.isRequired
}

export default HamburgerButton