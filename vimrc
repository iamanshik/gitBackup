syntax on 
filetype plugin indent on
set ts=2 sts=2 sw=2 et ai si
set rnu
call plug#begin()
Plug 'preservim/nerdtree'
Plug 'jiangmiao/auto-pairs'
Plug 'gruvbox-community/gruvbox'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'neoclide/coc.nvim'
Plug 'dracula/vim'
Plug 'bluz71/vim-nightfly-colors'
call plug#end()


" use <tab> for trigger completion and navigate to the next complete item
function! CheckBackspace() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

inoremap <silent><expr> <Tab>
      \ coc#pum#visible() ? coc#pum#next(1) :
      \ CheckBackspace() ? "\<Tab>" :
      \ coc#refresh()



set termguicolors
"colo gruvbox
colo nightfly
inoremap <c-f> <Esc>:NERDTreeToggle<cr>
nnoremap <c-f> <Esc>:NERDTreeToggle<cr>
