import React from 'react';
import { Formik } from 'formik';

const FormContainer = (props) => {
  let { initModel, validation, onSubmit, onChange, innerRef } = props;
  const elementOnnChange = (props) => {
    onChange(initModel);
    if (props.onChange) props.onChange();
  };

  const generateFormikObject = (
    child,
    formikprops,
    elementOnnChange,
    element
  ) => {
    let parent = false;
    if (!element) {
      element = {};
      parent = true;
    }
    if (child.props && child.props.formEle) {
      return React.cloneElement(child, {
        ...child.props,
        ...formikprops,
        onChange: () => {
          elementOnnChange(child.props);
        },
      });
    }
    if (child.props.children && Array.isArray(child.props.children)) {
      const list = child.props.children.map((child) =>
        generateFormikObject(child, formikprops, elementOnnChange, element)
      );

      let newprops={
        ...child.props,
        children : list
      }
      return React.cloneElement(child, {
        ...newprops,
        ...formikprops,
        onChange: () => {
          elementOnnChange(child.props);
        },
      });
    }
    if (!(Array.isArray(child.props.children) || !child.props.formik)) {
      return child;
    }

    if (parent) {
      return child;
    }
  };

  return (
    <Formik
      initialValues={initModel && initModel}
      validationSchema={validation && validation}
      innerRef={innerRef}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit(values);
      }}
    >
      {({ handleSubmit, ...formikprops }) => (
        <form onSubmit={initModel && handleSubmit}>
          {React.Children.map(props.children, (child) => {
            let { props } = child;

            return generateFormikObject(child, formikprops, elementOnnChange);

            // return React.cloneElement(child, {
            //   ...props,
            //   ...formikprops,
            //   onChange: () => {
            //     elementOnnChange(props);
            //   }
            // });
          })}
        </form>
      )}
    </Formik>
  );
};

export default FormContainer;
