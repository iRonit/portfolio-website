import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CardContainer, Card } from './DoughnutChartElements';
import InfoSection from '../InfoSection';
import { aboutMe } from '../../data/InfoSectionItems'

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {
                showModal &&
                <CardContainer>
                    <Card>
                        <button onClick={() => { setShowModal(false); document.body.style.overflow = "auto"; }}>Close</button>

                        <InfoSection {...aboutMe} />
                    </Card>
                </CardContainer>
            }
        </>
    )
}

export default Modal;
