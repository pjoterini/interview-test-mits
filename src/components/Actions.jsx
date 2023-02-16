import React, { useState } from "react";
import ActionCard from "./ActionCard";

const Actions = () => {
  const [printCount, setPrintCount] = useState({ count: 0, active: false });
  const [lockCount, setLockCount] = useState({ count: 0, active: false });
  const [userCount, setUserCount] = useState({ count: 0, active: false });

  const setOtherStatesFalse = (setState1, setState2) => {
    setState1((prev) => {
      return { ...prev, active: false };
    });
    setState2((prev) => {
      return { ...prev, active: false };
    });
  };

  const handleClick = (state, setState, setOtherStatesFalse) => {
    if (state.active) return;

    setOtherStatesFalse();

    setState((prev) => {
      return { count: prev.count + 1, active: true };
    });
  };

  console.log(
    "blue: ",
    printCount.count,
    "red: ",
    lockCount.count,
    "green ",
    userCount.count
  );

  return (
    <div className="actions">
      <ActionCard
        state={printCount}
        setState={setPrintCount}
        setOtherStatesFalse={() =>
          setOtherStatesFalse(setLockCount, setUserCount)
        }
        handleClick={handleClick}
        imgSrc="/fingerprint_icon.svg"
        heading="Install the App"
        text="Big, small, online, offline, local or international. Size doesn't matter. We work on diverse projects for top brands."
        color="blue"
      />
      <ActionCard
        state={lockCount}
        setState={setLockCount}
        setOtherStatesFalse={() =>
          setOtherStatesFalse(setPrintCount, setUserCount)
        }
        handleClick={handleClick}
        imgSrc="/lock_icon.svg"
        heading="Login First"
        text="Most popular type of partnership. limited liabilities, Size doesn’t work on diverse projects for top brands."
        color="red"
      />
      <ActionCard
        state={userCount}
        setState={setUserCount}
        setOtherStatesFalse={() =>
          setOtherStatesFalse(setLockCount, setPrintCount)
        }
        handleClick={handleClick}
        imgSrc="/userProfile_icon.svg"
        heading="Setup Your Profile"
        text="Popular type of partnership. limited liabilities, in fact, the only Size doesn’t matter. diverse projects for top brands."
        color="green"
      />
    </div>
  );
};

export default Actions;
