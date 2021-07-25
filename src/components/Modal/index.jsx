import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';
import { Card, CardContainer, CardRow, CloseModalButton, ModalContent } from './ModalItems';
import SkillBars from './SkillBars';

const Modal = ({ showModal, setShowModal, setModalAnimate, animationCoordinates, skillItem }) => {

    // Close Modal
    const closeModal = function () {
        setShowModal(false);
        setModalAnimate(false);
        document.body.style.overflow = "auto";
    };

    // Clicking outside the modal
    const modalRef = useRef();
    const closeModalOnClickOutside = e => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    // Pressing on Escape key
    const keyPress = useCallback(e => {
        if (e.key === 'Escape') {
            closeModal();
        }
    }, [setShowModal, showModal]);
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            {
                showModal &&
                <CardContainer ref={modalRef} onClick={closeModalOnClickOutside}>
                    <Card bgColor={skillItem.bgColor} x={animationCoordinates.x} y={animationCoordinates.y}>
                        <CloseModalButton
                            onClick={() => { closeModal(); }}
                        />
                        <CardRow>
                            {/* Column1 */}
                            <ModalContent gridArea={'col1'}>
                                {
                                    skillItem.col1.map((col1SkillSet) => {
                                        return <SkillBars skillTitle={col1SkillSet.title} skills={col1SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>

                            {/* Column2 */}
                            <ModalContent gridArea={'col2'}>
                                {
                                    skillItem.col2.map((col2SkillSet) => {
                                        return <SkillBars skillTitle={col2SkillSet.title} skills={col2SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>

                            {/* Column3 */}
                            <ModalContent gridArea={'col3'}>
                                {
                                    skillItem.col3.map((col3SkillSet) => {
                                        return <SkillBars skillTitle={col3SkillSet.title} skills={col3SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>
                        </CardRow>
                    </Card>
                </CardContainer>
            }
        </AnimatePresence>
    )
}

export default Modal;
