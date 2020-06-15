import React from 'react';

const Form = () => (
    <>
        <form>
            <label>Where do you want to camp?</label>
            <select>
                <option>Bristol</option>
                <option>Cornwall</option>
                <option>Devon</option>
            </select>
        </form>

        <button>Search</button>
    </>
)

export default Form;