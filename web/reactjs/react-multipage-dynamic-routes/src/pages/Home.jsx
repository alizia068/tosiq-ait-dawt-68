import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true)
  }
  return (
    <div>
      <Navbar />
      <div className="p-5 bg-white/50 m-5 rounded-lg">
        <button onClick={handleModal} className="cursor-pointer block bg-white/70 py-1 px-3 rounded shadow">Click</button>
        Home page
      </div>

      {/* Modal */}
      { showModal &&
      <Modal show={showModal} setShow={setShowModal}/>
      }
    </div>
  );
};

export default Home;
