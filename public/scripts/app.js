"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("app js is running");
var appRoot = document.getElementById("app");

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount");

            var _json = localStorage.getItem("Indecision");
            var opts = JSON.parse(_json);

            this.setState(function () {
                return {
                    options: opts
                };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            // console.log("componentDidUpdate");
            var _json = JSON.stringify(this.state.options);
            localStorage.setItem("Indecision", _json);
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(val) {
            if (!val) {
                return "enter value option";
            } else if (this.state.options.indexOf(val) > -1) {
                return "option already exits";
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([val])
                };
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            var opt = this.state.options[rand];
            alert(opt);
        }
    }, {
        key: "handleDelete",
        value: function handleDelete(val) {
            // console.log("val = "+val);
            // const ind = this.state.options.indexOf(val);
            // console.log("ind = "+ind);

            this.setState(function (prevState) {
                var ind = prevState.options.indexOf(val);
                // console.log("ind = "+prevState.options.splice(ind,1));
                prevState.options.splice(ind, 1);
                return {
                    options: prevState.options
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subTitle = "put ur life in hands of computer";
            // let options=['thing one',"thing two","thing three"];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handleClick: this.handleClick }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll, handleDelete: this.handleDelete }),
                React.createElement(Addoption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return App;
}(React.Component);

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subTitle}</h3>
//             </div>
//         )
//     }
// }

//change class based component to stateless function


var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h3",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: "sengu"

    // class Action extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.props.handleClick} disabled={!this.props.hasOptions}>what should I do?</button>
    //             </div>
    //         );
    //     } 
    // }

    //change class based component to stateless function

};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleClick, disabled: !props.hasOptions },
            "what should I do?"
        )
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map(function (option){
//                         return <Option 
//                         optionTxt={option} 
//                         key={option} 
//                          />
//                     })
//                 }
//             </div>
//         ); 
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRemoveAll },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                optionTxt: option,
                key: option,
                handleDelete: props.handleDelete });
        }),
        props.options.length == 0 && React.createElement(
            "p",
            null,
            "you may add option to play"
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionTxt}</p>
//             </div>
//         );
//     }
// }

//change class based component to stateless function
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionTxt,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDelete(props.optionTxt);
                } },
            "Remove"
        )
    );
};

var Addoption = function (_React$Component2) {
    _inherits(Addoption, _React$Component2);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this2 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Addoption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var opts = e.target.elements.inputBox.value.trim();
            var err = this.props.handleAddOption(opts);

            this.setState(function () {
                return {
                    error: err
                };
            });
            e.target.elements.inputBox.value = "";
            // if(err){
            // }
            // if(opts){
            //     this.props.handleAddOption(opts);
            //     e.target.elements.inputBox.value="";
            // }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "inputBox" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
                    )
                )
            );
        }
    }]);

    return Addoption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), appRoot);
