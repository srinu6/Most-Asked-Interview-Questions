// Implement an analytics SDK that exposes log events, it takes in events and queues them,
// and then starts sending the events. This is a Flipkart frontend interview question.

// Send each event after a delay of 1 second and this logging fails every n % 5 times.
// Send the next event only after the previous one resolves.
// When the failure occurs attempt a retry.

class SDK {
  constructor() {
    this.queue = [];
    this.count = 1;
  }
  logEvent(event) {
    this.queue.push(event);
  }
  //   myEvents() {
  //     console.log(this.queue);
  //   }

  wait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });
  }

  sendAnalytics = async function () {
    if (this.queue.length === 0) {
      return;
    }
    const current = this.queue.shift();
    try {
      await this.wait();
      console.log("Analytics sent " + current);
      this.count++;
    } catch (e) {
      // if execution fails
      console.log("-----------------------");
      console.log("Failed to send " + current);
      console.log("Retrying sending " + current);
      console.log("-----------------------");

      // reset the count
      this.count = 1;
      this.queue.unshift(current);
    } finally {
      this.sendAnalytics();
    }
  };
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");
sdk.sendAnalytics();
