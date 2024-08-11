/*
 * This file is part of Portfolio Svelte.
 *
 * Portfolio Svelte is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Portfolio Svelte is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Portfolio Svelte.  If not, see <https://www.gnu.org/licenses/>.
 *
 * Copyright (C) 2024 Omer Faruk Aras
 */

import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
