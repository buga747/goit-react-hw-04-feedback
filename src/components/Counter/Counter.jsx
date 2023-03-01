import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import { Container } from "./Counter.styled";

class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addFeedback = (state) => {
        this.setState(prevState => ({
            [state]: prevState[state] + 1,
        }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        
       return good + neutral + bad;
            }

    countPositiveFeedbackPercentage() {
        const { good } = this.state;

        if (good === 0) {
            return '0%';
        } else {
            const positiveFeedbacks = Math.round(good / this.countTotalFeedback() * 100)
            return `${positiveFeedbacks}%`;}
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);

        return  <Container>
            <Section title="Please leave feedback">
            
             <FeedbackOptions
                options={options}
                onLeaveFeedback={this.addFeedback}
            />
            </Section>

            <Section  title={'Statistics'}>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </Section>
              
            </Container>
    }
}

export default Counter;