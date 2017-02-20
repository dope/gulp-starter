# Require any additional compass plugins here.

# You can select your preferred output style here (can be overridden via the command line):
# Values: ":expanded", ":nested", ":compact" or ":compressed"
output_style = :compressed

# To enable relative paths to assets via compass helper functions.
# relative_assets = true

# To disable debugging comments that display the original location of your selectors.
# line_comments = false

# Use sourcemap to debug
sourcemap = true

# Unix line-endings
sass_options = {:unix_newlines => true}

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from sass --to sass sass scss && rm -rf sass && mv scss sass

add_import_path "./bower_components/bootstrap-sass-official/assets/stylesheets"
add_import_path "./bower_components/fontawesome/scss"
