import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import { ReactComponentBase, BasicComponent, BasicProps } from './react-component';
import { Component, ElementProps } from './gen-component';

import {Badge} from "./badge";

function cloneChildren(children, props) {
    return React.Children.map(children, (child: React.DOMElement<any, any>) => {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}

export interface DrawerProps extends React.Props<any> {
    title?: string;
    className?: string;
}

export interface HeaderRowProps extends DrawerProps {
    location?: string;
}

export interface HeaderTabProps extends DrawerProps {
    ripple?: boolean;
}

export interface HeaderProps extends HeaderRowProps {
    scroll?: boolean;
    transparent?: boolean;
    waterfall?: any;
}

export interface LayoutProps extends React.Props<any> {
    className?: string;
    fixedDrawer?: boolean;
    fixedHeader?: boolean;
    fixedTabs?: boolean;
}

export class Spacer extends BasicComponent {
    constructor(props) {
        super(props);
        this.defaultClassName = 'mdl-layout-spacer';
    }
}

export class Content extends BasicComponent {
    constructor(props) {
        super(props);

        this.element = 'main';
        this.defaultClassName = 'mdl-layout__content';
    }
}

export class Drawer extends ReactComponentBase<DrawerProps, any> {
    render() {
        var { className, title } = this.props;
        var classes = classNames('mdl-layout__drawer', className);

        return (
          <header  className={classes}>
            {title ? <span className="mdl-layout-title">{title}</span> : null}
            {this.props.children}
          </header >
        );
    }
}

function cloneNavigationItem(children, props) {
    return React.Children.map(children, (child: React.DOMElement<any, any>) => {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}

export class Navigation extends ReactComponentBase<DrawerProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, children } = this.props;
        const classes = classNames('mdl-navigation', className);

        return (
            <nav {...this.props} className={classes}>
                {cloneNavigationItem(children, (child) => ({
                    className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props ? child.props.className : null)
                })) }
            </nav>
        );
    }
}

export class HeaderRow extends ReactComponentBase<HeaderRowProps, any> {
    render() {
        var { className, title, location } = this.props;
        var classes = classNames('mdl-layout__header-row', className);

        return (
            <div className={classes}>
                {title ? <span className="mdl-layout-title">
                    <a href='index.html'>{title}</a></span> : null}
                {location && <span className="mdl-layout-title">&nbsp; {"/ " + location}</span> }
                <Spacer />
                {this.props.children}
            </div>
        );
    }
}

export class HeaderTabs extends ReactComponentBase<HeaderTabProps, any> {
    render() {
        var { className, ripple } = this.props;
        var classes = classNames('mdl-layout__tab-bar', {
            'mdl-js-ripple-effect': ripple !== false
        }, className);

        return (
            <div className={classes}>
                {cloneChildren(this.props.children, child => ({
                    className: classNames('mdl-layout__tab', child.props.className)
                })) }
                </div>
        );
    }
}

export class Header extends ReactComponentBase<HeaderProps, any> {
    render() {
        var { className, scroll, title, location, transparent, waterfall } = this.props;
        var classes = classNames('mdl-layout__header', {
            'mdl-layout__header--scroll': scroll,
            'mdl-layout__header--transparent': transparent,
            'mdl-layout__header--waterfall': waterfall
        }, className);

        var isRowOrTab = false;
        React.Children.forEach(this.props.children, (child: any) => {
            if (child && (child.type === HeaderRow || child.type === HeaderTabs)) {
                isRowOrTab = true;
            }
        });

        return (
            <header className={classes}>
                {isRowOrTab ? this.props.children : (
                    <HeaderRow title={title} location={location}>
                            {this.props.children}
                        </HeaderRow>
                ) }
                </header>
        );
    }
}

export class Layout extends ReactComponentBase<LayoutProps, any> {
    render() {
        var { className, fixedDrawer, fixedHeader, fixedTabs } = this.props;

        var classes = classNames('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);

        return (
            <div {...this.props} className={classes}>
                {this.props.children}
                </div>
        );
    }
}
