/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>Cozy | {title}</title>
    </Helmet>
  );
}

export default PageTitle;
