import { useState } from "react"


const CheckoutPage = () => {

    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("visa")

    //handle tap change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = ()=> setShow(true);
    const handleClose = ()=> setShow(false);

  return (
    <div>CheckoutPage</div>
  )
}

export default CheckoutPage