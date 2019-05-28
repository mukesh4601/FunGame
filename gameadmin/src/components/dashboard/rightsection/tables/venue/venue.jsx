import React, { Component } from "react";
import "./venue.css";

class Venue extends Component {
  state = {};

  // showDiv() {
  //   // document.getElementById("venue").style.display = "block";
  //   console.log("hello");
  // }
  selectedRow = null;

  onFormSubmit() {
    if (validate()) {
      var formData = readFormData();
      if (selectedRow == null) insertNewRecord(formData);
      else updateRecord(formData);
      resetForm();
    }
  }

  readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("fullName").value;
    formData["Address"] = document.getElementById("empCode").value;
    formData["Contact"] = document.getElementById("salary").value;

    return formData;
  }

  insertNewRecord(data) {
    var table = document
      .getElementById("employeeList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Contact;
    cell4 = newRow.insertCell(3);

    cell4.innerHTML = `<a href="#" title="Add Product">
                         <i class="fa fa-plus-square" aria-hidden="true" />
                        </a>
                        <a href="#" title="Add User">
                    <i class="fa fa-user-plus" aria-hidden="true" />
                  </a>`;

    cell5 = newRow.insertCell(4);

    cell5.innerHTML = `<a href="#" title="Update/Edit">
                          <i class="fa fa-pencil" aria-hidden="true" />
                       </a>
                        <a href="#" title="Delete">
                          <i class="fa fa-trash" aria-hidden="true" />
                        </a>`;
  }

  resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";

    selectedRow = null;
  }

  onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  }
  updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
  }

  onDelete(td) {
    if (confirm("Are you sure to delete this record ?")) {
      row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      resetForm();
    }
  }

  validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
      isValid = false;
      document
        .getElementById("fullNameValidationError")
        .classList.remove("hide");
    } else {
      isValid = true;
      if (
        !document
          .getElementById("fullNameValidationError")
          .classList.contains("hide")
      )
        document
          .getElementById("fullNameValidationError")
          .classList.add("hide");
    }
    return isValid;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 butn">
          <button className="btn">Add Venue</button>
        </div>
        <div className="col-md-12 venuetbl">
          <table className="table table-hover tbl">
            <thead>
              <tr>
                <th>Venue ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile No</th>
                <th>Action</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>1234567890</td>
                <td>
                  <a href="#" title="Add Product">
                    <i class="fa fa-plus-square" aria-hidden="true" />
                  </a>
                  <a href="#" title="Add User">
                    <i class="fa fa-user-plus" aria-hidden="true" />
                  </a>
                </td>
                <td>
                  <a href="#" title="Update/Edit">
                    <i class="fa fa-pencil" aria-hidden="true" />
                  </a>
                  <a href="#" title="Delete">
                    <i class="fa fa-trash" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>1234567890</td>
                <td>
                  <a href="#" title="Add Product">
                    <i class="fa fa-plus-square" aria-hidden="true" />
                  </a>
                  <a href="#" title="Add User">
                    <i class="fa fa-user-plus" aria-hidden="true" />
                  </a>
                </td>
                <td>
                  <a href="#" title="Update/Edit">
                    <i class="fa fa-pencil" aria-hidden="true" />
                  </a>
                  <a href="#" title="Delete">
                    <i class="fa fa-trash" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>1234567890</td>
                <td>
                  <a href="#" title="Add Product">
                    <i class="fa fa-plus-square" aria-hidden="true" />
                  </a>
                  <a href="#" title="Add User">
                    <i class="fa fa-user-plus" aria-hidden="true" />
                  </a>
                </td>
                <td>
                  <a href="#" title="Update/Edit">
                    <i class="fa fa-pencil" aria-hidden="true" />
                  </a>
                  <a href="#" title="Delete">
                    <i class="fa fa-trash" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-12 venuefrm" id="venue">
          <form className="frm">
            <h2>Add Venue</h2>
            <div class="form-group">
              <label for="email">venue name</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Venue Name"
              />
            </div>
            <div class="form-group">
              <label for="pwd">venue address</label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter Venue Address"
              />
            </div>
            <div class="form-group">
              <label for="pwd">venue mobile no</label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter mobile no"
              />
            </div>
            <button type="submit" class="btn">
              add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Venue;
