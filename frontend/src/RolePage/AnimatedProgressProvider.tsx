import React from "react";
import { Animate } from "react-move";

interface ProviderProps {
    valueStart: number,
    valueEnd: number,
    easingFunction: any,
    duration: number,
    children: any,
}

interface ProviderState {
    isAnimated: boolean
}

class AnimatedProgressProvider extends React.Component<ProviderProps, ProviderState> {
    interval = undefined;

    state = {
        isAnimated: false
    };

    static defaultProps = {
        valueStart: 0
    };

    componentDidMount() {
        this.setState({
            isAnimated: !this.state.isAnimated
        });
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <Animate
                start={() => ({
            value: this.props.valueStart
        })}
        update={() => ({
            value: [
                this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
            ],
            timing: {
                duration: this.props.duration * 1000,
                ease: this.props.easingFunction
            }
        })}
    >
        {({ value }) => this.props.children(value)}
        </Animate>
    );
    }
}

export default AnimatedProgressProvider;
