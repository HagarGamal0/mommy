import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./achievements.css";

export default function Achievements() {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    const speed = 200; // The lower the slower

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);

        const inc = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  }, []);
  return (
    <Container fluid className="counter-section">
      <Container>
        <h2 className="counter__text">إنجازاتنا</h2>
        <div className="counters">
          <div className="counter">
            <p className="count" data-target="500"></p>
            <h4>عملائنا السعداء</h4>
          </div>
          <div className="counter">
            <p className="count" data-target="1050"></p>
            <h4>مبيعات</h4>
          </div>
          <div className="counter">
            <p className="count" data-target="50"></p>
            <h4>استخدام للتطبيق</h4>
          </div>
          <div className="counter">
            <p className="count" data-target="10"></p>
            <h4>جوائزنا </h4>
          </div>
        </div>
      </Container>
    </Container>
  );
}
