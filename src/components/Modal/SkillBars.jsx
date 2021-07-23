import React from 'react';
import { SkillSection } from './ModalItems';
import SkillBar from './SkillBar';

const SkillBars = ({ skillTitle, skills, bgColor }) => {
    return (
        <>
            <SkillSection>
                <h1>{skillTitle}</h1>
                {
                    skills.map((skill) => {
                        return <SkillBar skill={skill} bgColor={bgColor} />
                    })
                }
            </SkillSection>
        </>
    )
};

export default SkillBars;
