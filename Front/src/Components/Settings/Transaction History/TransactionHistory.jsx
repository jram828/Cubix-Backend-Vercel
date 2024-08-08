import { Select } from "antd";
import PropTypes from "prop-types";
import calendarIcon from "../../../assets/calendar.svg";
import transactionIcon from "../../../assets/type.svg";
import coinIcon from "../../../assets/coin.svg";
import arrowLeft from "../../../assets/arrowLeft2.svg";
import deposit from "../../../assets/deposit.svg";
import withdrawal from "../../../assets/withdrawal.svg";
import bonus from "../../../assets/bonus.svg";
import BTC from "../../../assets/BTC.svg";
import Binance from "../../../assets/Binance.svg";
import Ethereum from "../../../assets/Ethereum.svg";
import Bitcoin from "../../../assets/Bitcoin.svg";
import Ripple from "../../../assets/Ripple.svg";
import email from "../../../assets/email.svg";
import "./TransactionHistory.css";
import { useState } from "react";

const { Option } = Select;

const TransactionHistory = () => {
  const [periodFilter, setPeriodFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [coinFilter, setCoinFilter] = useState(null);

  const [, setReturnWallet] = useState(false);

  const handleShowClick = () => {
    setReturnWallet(true);
  };

  const transactions = [
    {
      date: "06/12/24 10:45 am",
      type: "Deposit",
      coinAbrev: "USDT",
      amount: "20 USDT",
      usdAmount: "$20.00",
      coin: "BTC",
      coinIcon: BTC,
      icon: deposit,
      party: "A1zP1eP5Q ...",
      partyType: "Recipient",
    },
    {
      date: "06/11/24 09:21 am",
      type: "Withdrawal",
      coinAbrev: "BNB",
      amount: "20 BNB",
      usdAmount: "$0.00",
      coin: "Binance",
      coinIcon: Binance,
      icon: withdrawal,
      party: "A1zP1eP5Q ...",
      partyType: "Sender",
    },
    {
      date: "06/11/24 05:58 pm",
      type: "Bonus",
      coinAbrev: "ETH",
      amount: "20 ETH",
      usdAmount: "$0.00",
      coin: "Ethereum",
      coinIcon: Ethereum,
      icon: bonus,
      party: "A1zP1eP5Q ...",
      partyType: "Recipient",
    },
    {
      date: "06/05/24 10:45 am",
      type: "Deposit",
      coinAbrev: "BTC",
      amount: "20 USDT",
      usdAmount: "$0.00",
      coin: "Bitcoin",
      coinIcon: Bitcoin,
      icon: deposit,
      party: "A1zP1eP5Q ...",
      partyType: "Recipient",
    },
    {
      date: "06/04/24 09:21 am",
      type: "Withdrawal",
      coinAbrev: "XRP",
      amount: "20 BNB",
      usdAmount: "$0.00",
      coin: "Ripple",
      coinIcon: Ripple,
      icon: withdrawal,
      party: "A1zP1eP5Q ...",
      partyType: "Sender",
    },
  ];

  const formatDate = (dateStr) => new Date(dateStr);

  const filterTransactions = (transactions) => {
    const now = new Date();
    return transactions.filter((tx) => {
      const txDate = formatDate(tx.date);
      const matchesPeriod =
        !periodFilter ||
        (periodFilter === "last-week" &&
          txDate >= new Date(now.setDate(now.getDate() - 7))) ||
        (periodFilter === "last-30days" &&
          txDate >= new Date(now.setDate(now.getDate() - 30))) ||
        (periodFilter === "last-90days" &&
          txDate >= new Date(now.setDate(now.getDate() - 90)));
      const matchesType =
        !typeFilter || tx.type.toLowerCase() === typeFilter.toLowerCase();
      const matchesCoin =
        !coinFilter || tx.coinAbrev.toLowerCase() === coinFilter.toLowerCase();
      return matchesPeriod && matchesType && matchesCoin;
    });
  };

  const getSectionHeader = (section) => {
    switch (section) {
      case "today":
        return "Today";
      case "yesterday":
        return "Yesterday";
      case "lastWeek":
        return "Last Week";
      default:
        return "";
    }
  };

  const todayDate = new Date("06/12/24");
  const yesterdayDate = new Date("06/11/24");

  const renderGroupedTransactions = () => {
    const filteredTransactions = filterTransactions(transactions);
    return (
      <div className="transaction-list">
        <p className="text-sm my-2 text-gray-500">
          {getSectionHeader("today")}
        </p>
        {filteredTransactions
          .filter(
            (tx) =>
              formatDate(tx.date).toDateString() === todayDate.toDateString()
          )
          .map(renderTransaction)}

        <p className="text-sm my-2 text-gray-500">
          {getSectionHeader("yesterday")}
        </p>
        {filteredTransactions
          .filter(
            (tx) =>
              formatDate(tx.date).toDateString() ===
              yesterdayDate.toDateString()
          )
          .map(renderTransaction)}

        <p className="text-sm my-2 text-gray-500">
          {getSectionHeader("lastWeek")}
        </p>
        {filteredTransactions
          .filter(
            (tx) =>
              formatDate(tx.date) < todayDate &&
              formatDate(tx.date) < yesterdayDate
          )
          .map(renderTransaction)}
      </div>
    );
  };

  const renderTransaction = (tx) => (
    <div key={tx.date} className="transaction-row">
      <img src={tx.icon} alt={tx.type} className="transaction-icon" />
      <div className="transaction-column">
        <div className="transaction-type">
          <div>{tx.type}</div>
        </div>
        <div className="transaction-date">{tx.date}</div>
      </div>
      <div className="transaction-column">
        <p className="font-bold">{tx.partyType}</p>
        <div className="transaction-party">{tx.party}</div>
      </div>
      <div className="transaction-column flex">
        <img src={tx.coinIcon} alt={tx.coin} className="coin-icon" />
        <div className="transaction-coin">
          <div className="coin-name">{tx.coin}</div>
          <div className="coin-abbreviation">{tx.coinAbrev}</div>
        </div>
      </div>
      <div className="transaction-column">
        <div className="transaction-amount">
          {tx.amount}
          <div className="transaction-usd">{tx.usdAmount}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="transaction-history">
      <div className="flex mb-3 justify-items-center">
        <button onClick={handleShowClick} className="back-button">
          <img src={arrowLeft} alt="back" />
        </button>
        <h1 className="text-xl ml-1 mb-1 font-bold">Transaction History</h1>
      </div>
      <div className="balance-section">
        <div className="balance">
          <span>100.00</span>
          <p className="text-xs text-gray-400 font-normal">Balance</p>
        </div>
      </div>
      <div className="filters">
        <Select
          className="filter-item"
          value={periodFilter || undefined}
          placeholder={
            <span className="filter-placeholder">
              <img src={calendarIcon} alt="calendar" className="filter-icon" />
              Period
            </span>
          }
          popupClassName="custom-dropdown"
          onChange={(value) => setPeriodFilter(value)}
        >
          <Option value={null}>All Time</Option>
          <Option value="last-week">Last Week</Option>
          <Option value="last-30days">Last 30 days</Option>
          <Option value="last-90days">Last 90 days</Option>
        </Select>
        <Select
          className="filter-item"
          value={typeFilter || undefined}
          placeholder={
            <span className="filter-placeholder">
              <img
                src={transactionIcon}
                alt="transaction"
                className="filter-icon"
              />
              Type
            </span>
          }
          popupClassName="custom-dropdown"
          onChange={(value) => setTypeFilter(value)}
        >
          <Option value={null}>All Types</Option>
          <Option value="deposit">Deposit</Option>
          <Option value="withdrawal">Withdrawal</Option>
          <Option value="bonus">Bonus</Option>
        </Select>
        <Select
          className="filter-item"
          value={coinFilter || undefined}
          placeholder={
            <span className="filter-placeholder">
              <img src={coinIcon} alt="coin" className="filter-icon" />
              Coin
            </span>
          }
          popupClassName="custom-dropdown"
          onChange={(value) => setCoinFilter(value)}
        >
          <Option value={null}>All Coins</Option>
          <Option value="usdt">USDT</Option>
          <Option value="usdc">USDC</Option>
          <Option value="btc">BTC</Option>
          <Option value="eth">ETH</Option>
          <Option value="bnb">BNB</Option>
          <Option value="xrp">XRP</Option>
          <Option value="shiba">SHIBA</Option>
          <Option value="doge">DOGE</Option>
          <Option value="wld">WLD</Option>
          <Option value="trx">TRX</Option>
          <Option value="ton">TON</Option>
        </Select>
      </div>
      <div className="transaction-list">{renderGroupedTransactions()}</div>
      <div className="options-section">
        <p className="options-title">Options</p>
        <div className="options-content">
          <img src={email} alt="email" className="options-image" />
          <p className="options-text">Help by e-mail</p>
        </div>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default TransactionHistory;
