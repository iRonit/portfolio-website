import React from 'react';
import { BarContainer, Bar, BarComplete } from './ModalItems';

const SkillBar = ({ skill, bgColor }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${skill.rate}%`
        }
        setStyle(newStyle);
    }, 10);

    return (
        <BarContainer>
            <h3>{skill.name}</h3>
            <Bar>
                <BarComplete style={style} bgColor={bgColor} rate={skill.rate} />
            </Bar>
        </BarContainer>
    )
};

export default SkillBar;
