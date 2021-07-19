function Modal(props){
    function cancelHandler(){
        props.onCancel()
    }
    function confirmHandler(){
        props.onConfirm()
    }
    return <div className='modal-bg'>
        <div className='modal'>
        <p className='modal-text'>Do you wanna do it?</p>
       <div className='modal-btn-cover'>
       <button className='btn btn-alt' onCancel={cancelHandler}>Cancel</button>
        <button className='btn' onConfirm={confirmHandler}>Confirm</button>
       </div>
    </div>
    </div>
}

export default Modal;