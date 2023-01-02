import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {
  const refContainer = useRef();
  const divContainer = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  }, [])
  
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} id="" />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello india</div>
    </>
  )
}

export default UseRefBasics

// 11-navbar project use navbar