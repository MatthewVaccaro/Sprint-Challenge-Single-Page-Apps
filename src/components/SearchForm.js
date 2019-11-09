import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";

function SearchForm(props, { status }) {
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (status) {
      setSearchValue(status);
    }
  }, [status]);

  function moveSearchData() {
    props.pullSearch(searchValue);
  }

  console.log("searchValue", searchValue);

  return (
    <section className="search-form">
      <Form>
        <label>
          Search
          <Field type="text" name="search" placeholder="Search For Something" />
        </label>
        <button type="submit">Search</button>
      </Form>
    </section>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      search: values.search || ""
    };
  },

  handleSubmit: (values, { setStatus }) => {
    setStatus(values);
    //moveSearchData();
  }
})(SearchForm);
