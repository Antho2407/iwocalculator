import React, { FC, useState } from "react";
import moment from "moment";

import { AppRoot, Title } from "./App.components";
import TopMenu from "../topMenu/TopMenu";
import Product from "../product/Product";
import { RCF, BL } from "../product/calculation";

moment.locale("en-gb");

const App: FC = () => {
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(4);

  return (
    <AppRoot>
      <Title>Your loan</Title>
      <TopMenu
        onAmountChanged={setAmount}
        onDurationChanged={setDuration}
        amount={amount}
        duration={duration}
      />
      {(amount || 0) > 0 && (duration || 0) > 0 && (
        <>
          <Product
            label="Resolving Credit Facility"
            calculation={RCF}
            amount={amount}
            duration={duration}
          />
          <Product
            label="Business loan"
            calculation={BL}
            amount={amount}
            duration={duration}
          />
        </>
      )}
    </AppRoot>
  );
};

export default App;
