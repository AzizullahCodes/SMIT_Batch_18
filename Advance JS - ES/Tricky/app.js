const calculateSalary = (from, to, pay) => {
  const workingDays = ["Monday", "Wednesday", "Friday"];
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const eachDayPay = Number(pay);
  let totalPay = 0;

  for (let i = fromDate; i <= toDate; i.setDate(i.getDate() + 1)) {
    const fullDay = i.toLocaleDateString("en-US", { weekday: "long" });

    if (workingDays.includes(fullDay)) {
      totalPay = totalPay + eachDayPay;
    }
  }

  console.log("Total pay: ", totalPay);
};

calculateSalary("2026-03-21", "2026-04-20", "500");
