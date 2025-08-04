import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Condition = () => {
  const navigate = useNavigate();
  return (
    <div className='shadow-lg bg-white !py-10 !px-10 rounded-lg'>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <FaArrowLeft
          onClick={() => navigate(-1)}
          style={{
            fontSize: "18px",
            color: "#6b7280",
            cursor: "pointer",
          }}
        />
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#111827",
            margin: 0,
          }}
        >
          Terms and conditions
        </h1>
      </div>
      <div className='!py-5'>
        <h1 className='!py-5'>1. Terms</h1>
        <h3 className='!py-2 text-sm/9'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h3>
      </div>
      <div className='!py-5'>
        <h1 className='!py-5'>2. Condition</h1>
        <h3 className='!py-2 text-sm/9'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority.</h3>
      </div>
      <div className='!mt-25'>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "150px",
              padding: "10px 10px",
              backgroundColor: "#111827",
              color: "white",
              border: "none",
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1f2937")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#111827")}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Condition