" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk
" I like using H and L for beginning/end of line
nmap H ^
nmap L $

" Yank to system clipboard
set clipboard=unnamed

" Go back and forward with Ctrl+O and Ctrl+I
" (make sure to remove default Obsidian shortcuts for these to work)
exmap back obcommand app:go-back
nmap <C-o> :back<CR>
exmap forward obcommand app:go-forward
nmap <C-i> :forward<CR>


exmap tnewrow obcommand editor:table-row-after
nmap tnr :tnewrow<CR>
exmap tnewcol obcommand editor:table-col-after
nmap tnc :tnewcol<CR>

exmap tdelrow obcommand editor:table-row-delete
nmap tdr :tdelrow<CR>
exmap tdelcol obcommand editor:table-col-delete
nmap tdc :tdelcol<CR>