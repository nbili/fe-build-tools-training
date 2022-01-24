#!/usr/bin/env node

/**
 * todo-cli
 * todo
 *
 * @author nbili <https://nbili.cc>
 */

const fs = require('fs');
const path = require('path');

const makeDir = require('make-dir');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const todos = path.join(process.cwd(), `.todo/todos.json`);

void (async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (!fs.existsSync(todos)) {
		await makeDir(`.todo`);
		process.chdir(`.todo`);

		fs.writeFileSync(`todos.json`, `{}`);
	}

	const adapter = new FileSync(todos);
	const db = low(adapter);
	db.defaults({ todos: [] }).write();

	// todo show / ls
	if (input.includes(`view`) || input.includes(`ls`)) {
		const allTodos = db.get(`todos`).value();

		console.log(`allTodos:`, allTodos);
	}

	debug && log(flags);
})();
