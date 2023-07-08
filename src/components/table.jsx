import React from 'react'
import './tabale.css'

export default function Table() {
  return (
    <div className='table-div'>
        <div className="table-top">
            <h2>Customers</h2>
            <div>
                <button>+Add Customer</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
        <div className="table-row">
            <table id='example' className='display'>
                <thead>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone No.</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>2**********v</td>
                        <td>Customer</td>
                        <td>Customer Address</td>
                        <td>Phone No.</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}
