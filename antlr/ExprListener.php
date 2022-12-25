<?php

/*
 * Generated from Expr.g4 by ANTLR 4.11.1
 */

use Antlr\Antlr4\Runtime\Tree\ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@see ExprParser}.
 */
interface ExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@see ExprParser::prog()}.
	 * @param $context The parse tree.
	 */
	public function enterProg(Context\ProgContext $context): void;
	/**
	 * Exit a parse tree produced by {@see ExprParser::prog()}.
	 * @param $context The parse tree.
	 */
	public function exitProg(Context\ProgContext $context): void;
	/**
	 * Enter a parse tree produced by {@see ExprParser::expr()}.
	 * @param $context The parse tree.
	 */
	public function enterExpr(Context\ExprContext $context): void;
	/**
	 * Exit a parse tree produced by {@see ExprParser::expr()}.
	 * @param $context The parse tree.
	 */
	public function exitExpr(Context\ExprContext $context): void;
}